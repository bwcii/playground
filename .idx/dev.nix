{ pkgs, ... }: {
  channel = "stable-23.05"; # "stable-23.05" or "unstable"
  packages = [
    pkgs.nodejs
    pkgs.nodePackages.firebase-tools
    pkgs.google-cloud-sdk
  ];
  idx.extensions = [
    "angular.ng-template"
    "WakaTime.vscode-wakatime"
  ];
  idx.previews = {
    enable = true;
    previews = [
      {
        command = ["npm" "run" "start" "--" "--port" "$PORT" "--host" "0.0.0.0" "--disable-host-check"];
        manager = "web";
        id = "web";
      }
      {
        id = "ios";
        manager = "ios";
      }
    ];
  };
}