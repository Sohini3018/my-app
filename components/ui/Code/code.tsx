import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { twMerge } from "tailwind-merge";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeType = {
  id: string;
  title: string;
  language: string;
  value: string;
};

type CodeProps = {
  items: CodeType[];
};

const Code = ({ items }: CodeProps) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [value, setValue] = useState<string>(items[0]?.id || "");

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="not-prose bg-[#0F1117] dark:bg-codeblock rounded-xl dark:ring-1 dark:ring-gray-800/50 relative">
      <div className="flex text-xs bg-black/40 leading-6 rounded-xl border border-gray-900/80">
        <div className="flex overflow-x-auto px-2">
          {items.map((item) => (
            <button
              className={twMerge(
                `group flex items-center relative px-2 pt-2.5 pb-2 text-white outline-none whitespace-nowrap font-medium ${
                  value === item.id
                }`
              )}
              key={item.id}
              onClick={() => setValue(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
        {copied ? (
          <div className="flex-auto flex justify-end items-center pr-4 rounded-tr">
            Copied!
          </div>
        ) : (
          items
            .filter((x) => x.id === value)
            .map((item) => (
              <CopyToClipboard key={item.id} text={item.value} onCopy={onCopy}>
                <button className="shrink-0 ml-3 caption1 font-semibold text-n-1 transition-colors hover:text-primary-1 md:hidden">
                  Copy code
                </button>
              </CopyToClipboard>
            ))
        )}
      </div>
      <div className="flex overflow-auto">
        {items
          .filter((x) => x.id === value)
          .map((item) => (
			
            <SyntaxHighlighter
              language={item.language}
              style={atomOneDark}
			  customStyle={{padding:20, background:'#0f1117'}}
              key={item.id}
            >
              {item.value}
            </SyntaxHighlighter>
          ))}
      </div>
    </div>
  );
};

export default Code;
