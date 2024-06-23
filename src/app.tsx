import Code from "./code";
import CodeBlock from "./code_block";

export default function App() {
    return (<>
        <nav className="bg-green-200 fixed top-0 w-full">
            <h1 className="text-3xl text-black p-1">Michael Mark's Blog</h1>
        </nav>
        <div className="h-11"></div>
        <p>Gleam, when it's completely by itself, kinda sucks. A "pure" Gleam program can do little more than be a simple CLI tool. That's why we have the <Code>@external</Code> attribute! It is one of Gleam's most powerful features, allowing Gleam code to interact with code written in JavaScript and Erlang. However, there is heretofore next to little documentation around how this system actually works, and it is generally too complex to learn without outside assistance. The purpose of this post is to serve as comprehensive documentation for this feature.</p>
        <h1>Syntax</h1>
        <p>The syntax for using the <Code>@external</Code> attribute is as follows:</p>
        <CodeBlock>
            @external(language, "module", "function")<br />
            fn function_name(params) -{">"} return_type
        </CodeBlock>
        <p>Going from top to bottom:</p>
        <ul className="list-disc list-outside px-5">
            <li>
                <Code>language</Code>:
                The language of the foreign function. Must be either <Code>javascript</Code> or <Code>erlang</Code>, verbatim and without quotes.
            </li>
            <li>
                <Code>"module"</Code>:
                The module that the function is in. This changes between the two targets, so refer to their respective sections.
            </li>
            <li>
                <Code>"function"</Code>:
                The name of the function <i>in the foreign language</i>.
            </li>
            <li>
                <Code>function_name</Code>:
                The name of the function <i>that your Gleam code will use</i>.
            </li>
            <li>
                <Code>params</Code>:
                The parameters of the function. Their names and types do not have to match (use what is convenient for Gleam), but their <i>arity</i> (the number of parameters) must. Gleam trusts you to use a type that makes sense, and that includes generic types, so use generics if you aren't sure what type it should be.
            </li>
            <li>
                <Code>return_type</Code>:
                The return type of the function. Gleam trusts you to use a type that makes sense, and that includes generic types, so use generics if you aren't sure what type it should be.
            </li>
        </ul>
    </>)
}
