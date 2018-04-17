const got = require('got')

module.exports = async function parse(link) {
	const { body } = await got(link)

	const script = new RegExp('<script type="text/javascript">window._sharedData = (.*);</script>')

	const json = JSON.parse(body.match(script)[1])

	const pic = json.entry_data.PostPage[0].graphql.shortcode_media.display_url

	return pic
}
