import React, {useState} from 'react';
import './App.css';
import {Row, Col, Container} from 'reactstrap';
import {HtmlRenderer, Parser} from 'commonmark'

function App() {
    const [markdown, setMarkdown] = useState("# Markdown previewer\n" +
        "## The best website to preview and edit your markdown\n" +
        "[Feel free to view my portfolio (coming soon)](https://github.com/magnus195)\n" +
        "`Keep in mind, this is not the most secure website`\n" +
        "```\n" +
        "dangerouslySetInnerHTML={{__html: renderer.render(parser.parse(markdown))}}\n" +
        "```\n" +
        "### What can you do with this?\n" +
        "1. Everything\n" +
        "2. Everything else\n" +
        "### What do users say about this\n" +
        "> **Very nice**\\\r" +
        "![Cat](https://http.cat/100.jpg)")

    let parser = new Parser()
    let renderer = new HtmlRenderer()

    function markdownChange(e: any) {
        // @ts-ignore
        const newMarkdown = e.target.value
        setMarkdown(newMarkdown)
    }

    return (
        <Container id="App">
            <Row lg={2}>
                <Col className={"column"}>
                    <textarea value={markdown} onChange={markdownChange} id={"editor"}/>
                </Col>
                <Col className={"column"}>
                    <div dangerouslySetInnerHTML={{__html: renderer.render(parser.parse(markdown))}} id={"preview"}/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
