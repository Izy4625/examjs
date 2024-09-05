
  let militaryUnit = {
  
    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };
  
  function getChiefOfStaffDetails(unit) {
      const chiefofstaff = unit.commandStructure.chiefOfStaff
      
    console.log(` ${chiefofstaff.rank} ${chiefofstaff.name} ${chiefofstaff.contact.phone}`);
    };

    function getTotalSoldiers(unit) {
       
        return unit.personnel.length.toString();
      };
     
      function updateDeployment(unit, newDeployment) {
       const history1 = {
        eventDate: unit.currentDeployment.estimatedEndDate,
        eventDescription: unit.currentDeployment.mission
      
        }
        unit.history.push(history1)
        unit.currentDeployment = newDeployment;
        return unit
    
      }
      function addfirearms(unit, newFirearm)
      {
        const firearms = unit.equipment.firearms
        for(i=0; i < firearms.length; i++){
        if(firearms[i].type == newFirearm.type && firearms[i].status == newFirearm.status)
        {
            firearms.quantity + 1
            break
        }
        else{
            firearms.push(newFirearm)
            break
        }
    }
    return unit

      }
  console.log(getChiefOfStaffDetails(militaryUnit));

  console.log(getTotalSoldiers(militaryUnit));
 

 
  const newDeployment = { location: "Eastern Front",mission:"Opration-Lions-den", startDate: "2024-07-01", estimatedEndDate: "2024-12-31" };
    console.log(updateDeployment(militaryUnit, newDeployment));
  
    const newFirearm =  {
  
        type: "M4 Rifle",

        quantity: 500,

        status: "Operational",

      };
    console.log(addfirearms(militaryUnit,newFirearm))

    function getTotalTrainingDuration(unit) {
        let amount =0
        for(i=0 ;i < unit.trainingPrograms.length; i++ ){
        amount += unit.trainingPrograms[i].duration
      }
      return amount}
      console.log(getTotalTrainingDuration(militaryUnit));

      module.exports ={
        getChiefOfStaffDetails,
        getTotalSoldiers,
        updateDeployment,
        addfirearms,
        getTotalTrainingDuration


      }