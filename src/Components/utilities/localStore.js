const getAppFromLocal = () => {
  const storedAppStr = localStorage.getItem("installedApp")

  if(storedAppStr){
    const storedAppData = JSON.parse(storedAppStr)
    return storedAppData;
  }else{
    return []
  }
}
const addToLocalStorage =(id)=>{
  const storedAppData = getAppFromLocal();
  if(storedAppData.includes(id)){
    return 
  }
  else{
    storedAppData.push(id)
    const data =  JSON.stringify(storedAppData)
    localStorage.setItem("installedApp",data)
  }
}

const removeFromStore=(id)=> {
  const savedData = getAppFromLocal()
  // const convert = savedData.map(dataId => parseInt(dataId))
 const filter = savedData.filter(dataId => parseInt(dataId) !== parseInt(id));
 
  const data =JSON.stringify(filter)
  localStorage.setItem("installedApp",data)
}

export {addToLocalStorage, getAppFromLocal, removeFromStore}

