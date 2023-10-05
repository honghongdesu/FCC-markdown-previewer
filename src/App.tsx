import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown";

const defaultMarkdown = `
# This is the React Markdown Previewer!

## This is the sub-heading line...
### Type your own changes in the left box to see it reflected in the right! Here's more:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

Type between the double-asterisks and it'll turn **bold**... wao!
Between the underscores, it'll be _italic_~
Between the symmetry again, it'll take on **_both_**!

You can put a link in the following parentheses to have it become a real link: [won't you tell me where this link leads?](https://www.freecodecamp.com)
Also, there are
> Block Quotes!
>> Indent it even futher!!
>>> And even again!!!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- Here's the big bullet of the list (Rabbit)
  - Here's the next sub-bullet (Mini Rex)
      - And the next sub-bullet (Blue)
        - And a final sub-bullet (Agouti)

You could also just delete everything in the left box and have your way, and see what happens!
`

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{textAlign: "center"}}>Markdown Previewer</h1>
        <div className='boxes-container'>
          <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
