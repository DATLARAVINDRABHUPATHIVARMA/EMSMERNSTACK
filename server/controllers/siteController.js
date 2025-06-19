import Site from "../models/Site.js";


const getSites = async (req, res) => {
  try {
    const sites = await Site.find().populate("siteClients")
    return res.status(200).json({success: true, sites})
  } catch (error) {
    return res.status(500).json({success: false, error: 'get sites server error'})
  }
}

const addSite = async (req, res) => {
  try {
    const {siteName, siteClients, siteAddress, siteDescription, siteEmployeeCount} = req.body;

    const newSite = new Site ({ siteName, siteClients, siteAddress, siteDescription, siteEmployeeCount })
    await newSite.save()
    return res.status(200).json({success: true, site: newSite})
  } catch (error) {
    return res.status(500).json({success: false, error: "add site server error"})
  }
}

const getSite = async (req, res) => {
  const {id} = req.params;
  try {
    const site = await Site.findById({_id: id}).populate('siteClients')
    return res.status(200).json({success: true, site})
  } catch (error) {
    return res.status(500).json({success: false, error: 'get site server error'})
  }
}

const updateSite = async (req, res) => {
  try {
    const {id} = req.params;
    const {siteName, siteAddress, siteDescription, siteEmployeeCount} = req.body;
    const updateSite = await Site.findByIdAndUpdate({_id: id},{
      siteName, siteAddress, siteDescription, siteEmployeeCount
    })
    return res.status(200).json({success: true, updateSite})
  } catch (error) {
    return res.status(500).json({success: false, error: 'Update Site server error'})
  } 
}

const deleteSite = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteSite = await Site.findByIdAndDelete({_id: id})
    return res.status(200).json({success: true, deleteSite})
  } catch (error) {
    return res.status(500).json({success: false, error: 'Delete Site server error'})
  }
}

 export {addSite, getSites, getSite, updateSite, deleteSite}