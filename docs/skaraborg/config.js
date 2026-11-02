// Site settings. Edit and redeploy; no build step.
window.RIS_CONFIG = {
  report: "../reports/skaraborg.html",
  about: "../about.html",
  public: true,   // aggregated, disclosure-controlled data; firms pooled into places
  // Question assistant ("Ask the report"):
  //   "off"     – hide the assistant
  //   "free"    – no AI service: searches the report text and lets the visitor copy the
  //               question + matching passages into ChatGPT, Claude or similar (no cost)
  //   "byok"    – free mode plus the option to paste one's own Anthropic API key; the key
  //               stays in the visitor's browser and is sent only to api.anthropic.com
  //   "service" – a managed service: questions go to the Cloudflare Worker in
  //               dashboard/worker/ (your API key, usage logged per client for billing).
  //               Set serviceUrl and give the client a clientKey.
  chat: {
    mode: "free",
    serviceUrl: "",          // e.g. "https://ris-assistant.<account>.workers.dev"
    clientKey: "",           // access key issued to the region for the managed service
    model: "claude-opus-5-5",
    maxTokens: 4000
  },
  // Contact shown in the footer and on the assistant page
  contact: { name: "RIS Skaraborg project", email: "" }
};
