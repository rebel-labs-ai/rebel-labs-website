# Installing the Template Skill

This skill helps you customize the website template using Claude Code. It can be installed at the project level (already done) or globally for use across projects.

## Project-Level (Already Installed)

The skill is already available in this project at `.claude/skills/template/`. When working in this repository with Claude Code, you can invoke it with:

```
/template
```

## Global Installation

To make this skill available across all your Claude Code projects:

```bash
# Copy the skill to your global skills directory
cp -r .claude/skills/template ~/.claude/skills/template
```

The skill will then be available via `/template` in any project.

## Usage

Once installed, invoke the skill in Claude Code:

```
/template
```

Then tell Claude what you want to customize:
- "Rebrand this site for my company Acme Corp"
- "Change the color palette to use purple as the accent"
- "Update the navigation to add a Products dropdown"
- "Add a new About page"

The skill loads reference files as needed to guide the customization.

## Updating

If the template is updated with new reference files or customization options, re-copy the skill:

```bash
cp -r .claude/skills/template ~/.claude/skills/template
```
