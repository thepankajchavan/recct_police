
interface dataRecord {
    ID: number,
    SiteName: string,
    TotalVehicles: number,
    TotalMachinery: number,
    HiredVehicles: number,
    OwnedVehicles: number,
    HiredMachinery: number,
    OwnedMachinery: number,
    TotalAssets: number,
}

const siteData : dataRecord[] = [
    {
      ID: 1,
      SiteName: "Shivmoga",
      TotalVehicles: 50,
      TotalMachinery: 30,
      HiredVehicles: 20,
      OwnedVehicles: 30,
      HiredMachinery: 10,
      OwnedMachinery: 20,
      TotalAssets: 80
    },
    {
      ID: 2,
      SiteName: "Barshi",
      TotalVehicles: 75,
      TotalMachinery: 40,
      HiredVehicles: 35,
      OwnedVehicles: 40,
      HiredMachinery: 15,
      OwnedMachinery: 25,
      TotalAssets: 115
    },
    {
      ID: 3,
      SiteName: "Mohol",
      TotalVehicles: 60,
      TotalMachinery: 25,
      HiredVehicles: 25,
      OwnedVehicles: 35,
      HiredMachinery: 10,
      OwnedMachinery: 15,
      TotalAssets: 85
    },
    {
      ID: 4,
      SiteName: "Dharmasthal",
      TotalVehicles: 80,
      TotalMachinery: 50,
      HiredVehicles: 40,
      OwnedVehicles: 40,
      HiredMachinery: 20,
      OwnedMachinery: 30,
      TotalAssets: 130
    },
    {
      ID: 5,
      SiteName: "Sankeshwar",
      TotalVehicles: 90,
      TotalMachinery: 60,
      HiredVehicles: 45,
      OwnedVehicles: 45,
      HiredMachinery: 25,
      OwnedMachinery: 35,
      TotalAssets:150
    },
    {
        ID: 6,
        SiteName: "Mangalwedha",
        TotalVehicles: 190,
        TotalMachinery: 90,
        HiredVehicles: 100,
        OwnedVehicles: 90,
        HiredMachinery: 45,
        OwnedMachinery: 45,
        TotalAssets:280
      }
  ]

export { siteData }