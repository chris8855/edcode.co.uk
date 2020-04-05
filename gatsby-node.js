/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/room/)) {
    page.matchPath = "/room/*"
    actions.createPage(page)
  }
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
