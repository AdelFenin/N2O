(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8712],{94006:function(e){e.exports=function(e){var n="[a-z][a-zA-Z0-9_]*",s={className:"string",begin:"\\$.{1}"},a={className:"symbol",begin:"#"+e.UNDERSCORE_IDENT_RE};return{aliases:["st"],keywords:"self super nil true false thisContext",contains:[e.COMMENT('"','"'),e.APOS_STRING_MODE,{className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},{begin:n+":",relevance:0},e.C_NUMBER_MODE,a,s,{begin:"\\|[ ]*"+n+"([ ]+"+n+")*[ ]*\\|",returnBegin:!0,end:/\|/,illegal:/\S/,contains:[{begin:"(\\|[ ]*)?"+n}]},{begin:"\\#\\(",end:"\\)",contains:[e.APOS_STRING_MODE,s,e.C_NUMBER_MODE,a]}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_smalltalk.aca1fada.chunk.js.map