{ pkgs }: {
  deps = [
    pkgs.gh
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}