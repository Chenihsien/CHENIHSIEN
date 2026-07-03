import { defineConfig } from "astro/config";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPage = owner && repo === `${owner}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : "https://example.com",
  base: isGitHubActions && repo && !isUserOrOrgPage ? `/${repo}` : "/",
});
