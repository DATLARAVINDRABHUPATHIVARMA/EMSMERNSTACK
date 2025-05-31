import Site from "../models/Site.js";

const getSites = async (req, res) => {
  try {
    const sites = await Site.find()
    return res.status(200).json({success: true, sites})
  } catch (error) {
    return res.status(500).json({success: false, error: 'get site server error'})
  }
}

const addSite = async (req, res) => {
  try {
    const {siteName, siteAddress, siteDescription, siteEmployeeCount} = req.body;
    const newSite = new Site ({
      siteName,
      siteAddress,
      siteDescription,
      siteEmployeeCount
    })
    await newSite.save()
    return res.status(200).json({success: true, site: newSite})
  } catch (error) {
    return res.status(500).json({success: false, error: "add site server error"})
  }
}



 export {addSite, getSites}