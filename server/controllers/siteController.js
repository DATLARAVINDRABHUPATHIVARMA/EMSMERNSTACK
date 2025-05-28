import Site from "../models/Site.js"

const getSites = async (req, res) => {
    try {
        const sites = await Site.find()
        return res.status(200).json({success: true, sites})
    } catch (error) {
        return res.status(500).json({success: false, error: 'get site server error'})
    }
}


export {getSites}