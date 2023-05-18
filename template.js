// var chubLocation = "html"

var chubDev = true

var input = `

html;
  // HEADER
  head;
    meta %charset=utf-8;
    meta %name=viewport %content=width|edevice-width;
    meta %name=msapplication-TileColor %content=#ff8800;
    meta %name=theme-color %content=#ff8800;
    
    title;
      "Chub Syntax! | Home";
    
    link %href=tempPage/style.css %rel=stylesheet %type=text/css;
    
    link %sizes=180x180 %rel=apple-touch-icon %href=tempPage/apple-touch-icon.png;
    link %sizes=32x32 %rel=icon %type=image/png %href=tempPage/favicon-32x32.png;
    link %sizes=16x16 %rel=icon %type=image/png %href=tempPage/favicon-16x16.png;
    link %href=tempPage/site.webmanifest %rel=manifest;
    link %href=tempPage/safari-pinned-tab.svg %rel=mask-icon %color=#ff8800;
  //
  
  // BODY
  body;
    nav;
      div .navHold;
        div .navTitle;
          h2;
            "CHUBML - CML";
        span .pipeDiv;
          "|";
        div .navCont;
          a .link-url %href=template.js;
            "Template File";
          
          span .pipeDiv;
            "|";
            
          a .link-url %href=style.css;
            "Template Style";

    article .descArticle;
    
    // Sick!
    // So comments work!
    
      h3;
        "Welcome to the";
        span;
          "CHUB WEBSITE!";
      // 
      
      small;
        "Log by SpectCOW | v.0.0.3";
      // 
      br;
      br;
      hr;
      br;
      
      p;
        "The newest and best Markdown Language simplifier!";
        br;
        "As of '9:30 AM, 2023-05-15', ChubML can build most website features.";
        br;
        
        "It can create";
        span .coolStuffspan;
          "COOL STUFF really quickly!";
        
        br;
        br;

        "It really is better than normal HTML!";

        br;
        
        "Due to its quick syntax, you can form tags";
        span .coolStuffspan;
          "within minutes,";
        
        br;
        
        "allowing you to create websites rapidly and efficently!";
        br;
        br;
        span .coolStuffspan;
          "And so much more!";
      br;
      br;

      hr;
    
    div .descArticle;
      h3;
        "Articles";
      small;
        "The Docs, Refs, And more. | Feel free add more, just contact me!";

    
    div #docsNav;
      div #docsLayout;
        div #docsMiniCol;
          
          a %href=docs .wlink-url;
            chub.fboxBorder .coolerfbox;
              p .docp;
                "About";
                
          a %href=docs .wlink-url;
            chub.prefboxBorder .coolerfbox;
              p .docp;
                "Getting Stated";
                
          a %href=docs .wlink-url;
            chub.prefboxBorder .coolerfbox;
              p .docp;
                "Functions";
        
        div #docsCol;
          
          a %href=docs .wlink-url .tooltip %style=display:flex|col|margin-right:17px;
            chub.prefboxBorder .coolerHfbox;
              p .docp;
                "Content";
          
          a %href=docs .wlink-url %style=display:flex|col|margin-right:17px;
            chub.prefboxBorder .coolerHfbox;
              p .docp;
                "Templates";
          
          a %href=docs .wlink-url %style=display:flex;
            chub.prefboxBorder .coolerHfbox;
              p .docp;
                "More...";
      
      // Layout
      
    // Docs Nav
    
  // BODY

  {=
    src="temp/test.js"
  =}
  
`;

var chubstart = () => {
  // injectChub(input)
  ChubRep(input)
}

var chubinjected = (locationGot) => {
  // console.log(locationGot, "lol")
}

