import React, { useContext, useState } from "react";

import ThemeContext from './../../style-root/ThemeContext';

import { Button, ButtonGroup } from "@design-lib";

import { preValueForJava, preValueForC_cpp } from './LanguagePrevalues';


import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/c_cpp";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";


function AceEditorWrapper() {

  const [aceLang, setAceLang] = useState('c_cpp');

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  const aceThemeMap = {
    first: 'monokai',
    second: 'github',
    third:  'solarized_dark',
  };

  const aceLangPrevalueMap = {
    c_cpp: preValueForC_cpp,
    java: preValueForJava,
  };

  const aceTheme = aceThemeMap[theme];
  const acePrevalue = aceLangPrevalueMap[aceLang];

  return (
    <div className="aceEditorWrapper">

      <ButtonGroup size="sm" block>
        <Button onClick={() => setAceLang('c_cpp')} label="c++" size="sm" />
        <Button onClick={() => setAceLang('java')} label="java" size="sm" />
      </ButtonGroup>

      <AceEditor
        placeholder="Placeholder Text"
        mode={aceLang}
        theme={aceTheme}
        name="blah2"
        onLoad={() => {}}
        onChange={(newValue) => {}}
        fontSize={18}
        width=""
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={acePrevalue}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  )
}

export default AceEditorWrapper;
