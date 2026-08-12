#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const questions = JSON.parse(await readFile(join(root, "practice-questions.json"), "utf8"));
if (questions.length !== 24) throw new Error(`Expected 24 questions, found ${questions.length}.`);

for (const [index, question] of questions.entries()) {
  if (question.id !== index + 1) throw new Error(`Question IDs must be sequential at ${index + 1}.`);
  if (!question.options.some(({ label }) => label === question.answer)) {
    throw new Error(`Question ${question.id} has no option matching ${question.answer}.`);
  }
}

const typeLabel = (type) => type === "true-false" ? "True or false" : "Multiple choice";

function replaceRegion(source, start, end, content, label) {
  const first = source.indexOf(start);
  const last = source.indexOf(end);
  if (first === -1 || last < first) throw new Error(`Missing ${label} markers.`);
  return `${source.slice(0, first + start.length)}\n${content.trim()}\n${source.slice(last)}`;
}

function texEscape(value) {
  return value
    .replaceAll("\\", "\\textbackslash{}")
    .replaceAll("&", "\\&")
    .replaceAll("%", "\\%")
    .replaceAll("$", "\\$")
    .replaceAll("#", "\\#")
    .replaceAll("_", "\\_")
    .replaceAll("{", "\\{")
    .replaceAll("}", "\\}")
    .replaceAll("~", "\\textasciitilde{}")
    .replaceAll("^", "\\textasciicircum{}");
}

const markdownQuestions = questions.map((question) => {
  const options = question.options.map((option) => `   - **${option.label}.** ${option.text}`).join("\n");
  return `${question.id}. **${question.topic} · ${typeLabel(question.type)}.** ${question.question}\n${options}`;
}).join("\n\n");
const markdownAnswers = questions.map((question) => {
  const answer = question.options.find(({ label }) => label === question.answer);
  return `**${question.id}. ${question.answer} — ${answer.text}**\n\n${question.explanation}`;
}).join("\n\n");
const markdownRegion = `#### Questions

${markdownQuestions}

<details>
<summary><strong>Answer key and explanations</strong></summary>

${markdownAnswers}

</details>`;

const markdownPath = join(root, "11-mock-exam-for-practice.md");
let markdown = await readFile(markdownPath, "utf8");
markdown = replaceRegion(markdown, "<!-- practice-questions:start -->", "<!-- practice-questions:end -->", markdownRegion, "Markdown question");
await writeFile(markdownPath, markdown);

const texQuestions = questions.map((question) => {
  const options = question.options.map((option) => `\\item \\textbf{${texEscape(option.label)}.} ${texEscape(option.text)}`).join("\n");
  return `\\needspace{7\\baselineskip}
\\item \\textbf{${texEscape(question.topic)} --- ${texEscape(typeLabel(question.type))}.} ${texEscape(question.question)}
\\begin{itemize}[leftmargin=1.7em]
${options}
\\end{itemize}`;
}).join("\n");
const texAnswers = questions.map((question) => {
  const answer = question.options.find(({ label }) => label === question.answer);
  return `\\needspace{4\\baselineskip}
\\item \\textbf{${texEscape(question.answer)} --- ${texEscape(answer.text)}} ${texEscape(question.explanation)}`;
}).join("\n");
const texRegion = `\\needspace{5\\baselineskip}
\\subsection[Practice multiple-choice and true/false questions]{Practice multiple-choice and true/false questions}
The 24 original questions below mix definitions, distinctions, short applications, professional judgment, and calculations. Allow about 40 minutes, answer every question, and record your choices before checking the answer key.

\\subsubsection*{Questions}
\\begin{enumerate}[leftmargin=*,itemsep=1.1em]
${texQuestions}
\\end{enumerate}

\\subsubsection*{Answer key and explanations}
\\begin{enumerate}[leftmargin=*,itemsep=.8em]
${texAnswers}
\\end{enumerate}`;

const texPath = join(root, "print-edition", "ecd-exam-study-guide.tex");
let tex = await readFile(texPath, "utf8");
const legacyPractice = `\\needspace{5\\baselineskip}
\\subsection[Multiple-choice review]{Multiple-choice review}
Create 24 multiple-choice or true/false questions from randomly selected glossary terms. Include a mix of definitions, distinctions, short applications, and common errors. Explain why each answer is correct before checking the glossary and its public references.`;
if (tex.includes(legacyPractice)) tex = tex.replace(legacyPractice, "% practice-questions:start\n% practice-questions:end");
tex = replaceRegion(tex, "% practice-questions:start", "% practice-questions:end", texRegion, "LaTeX question");
await writeFile(texPath, tex);

console.log(`Synchronized ${questions.length} questions into Markdown and LaTeX.`);
