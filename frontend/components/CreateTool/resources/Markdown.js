import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";


const CodeBlock = {
    code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            // eslint-disable-next-line react/no-children-prop
            children={String(children).replace(/\n$/, '')}
            style={solarizedlight}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
}


const Markdown = ({ value }) => {

    return (
        <ReactMarkdown 
            // eslint-disable-next-line react/no-children-prop
            children={value}
            components={CodeBlock}
            skipHtml={false}
            rehypePlugins={[rehypeRaw]}
            
        />
    )
}

export default Markdown