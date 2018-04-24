const axios = require('axios')

module.exports = async function parse(link) {
	const { data } = await axios(link)

	const script = new RegExp('<script type="text/javascript">window._sharedData = (.*);</script>')

	const json = JSON.parse(data.match(script)[1])

	const pic = json.entry_data.PostPage[0].graphql.shortcode_media.display_url

	return pic
}
