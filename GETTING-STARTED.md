# Getting Started

Copy the message below and paste it into Claude Code. That's all you need to do.

If you don't have Claude Code yet, install it first: https://claude.ai/code

---

## Message to paste into Claude Code

```
I want to set up a new website using a production-ready website template. I need your help to get everything set up.

Here's what's happening:
- There is a website template at this GitHub repository: https://github.com/rebel-labs-ai/rebel-labs-website.git
- It's a production-ready Next.js 15 website that comes with analytics (Google Tag Manager, Google Analytics, Microsoft Clarity), full SEO infrastructure (sitemaps, RSS feeds, structured data), a Sanity CMS blog platform, a Radix UI component library, dark/light theme system, and cookie consent — all pre-built and ready to go.
- I need you to clone this repository onto my machine, install the dependencies, and then tell me how to start working on it.

Here's what I need you to do step by step:

1. First, ask me where on my machine I'd like to put this project. I might not know what a directory is, so help me figure out a good location. A simple suggestion like my Desktop or Documents folder is fine.

2. Once I've told you where to put it, ask me what I want to name the project folder (e.g., "my-website", "acme-site", my company name, etc.).

3. Clone the repository into that location with the name I chose:
   git clone https://github.com/rebel-labs-ai/rebel-labs-website.git <folder-name>

4. Navigate into the cloned directory and run npm install to install all dependencies.

5. After everything is installed successfully, tell me that the setup is complete and give me the EXACT commands I need to run to start customizing my website. The commands should be:
   - Open a new terminal window (explain how based on my operating system)
   - Navigate to the project directory: cd <full-path-to-my-project>
   - Start Claude Code with the Opus model: claude --model opus

   Make these instructions very clear and simple. Format the commands so I can copy and paste them directly. For example:

   "Open a new terminal window, then copy and paste this:"

   cd /Users/me/Desktop/my-website && claude --model opus

6. Explain that once I'm in the new Claude Code session, I can just describe what I want in plain English and Claude will know exactly how to help me. Give me a few example things I could say, like:
   - "Set up this site for my company [name]"
   - "I want a blue and white color scheme"
   - "Help me set up Google Analytics"
   - "Rewrite the homepage for my business"

Keep your responses friendly and simple. Don't assume I know any technical terms — explain things in plain language. If something goes wrong during setup, help me fix it.
```
