import Table from './components/module/table/table';
import {ws} from './service/getPrice/webSocket'
import { getAllData } from "./service/getData/crud";
import { DataItem , Error } from './helper/interface/interface';
import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState<DataItem[]>([]);
    const [error, setError] = useState<Error>({message : '' , bool : false});
  
    useEffect(() => {
      if(data){
        ws.onmessage = function(event) {
          const dataArray = [event.data];
          dataArray.forEach(item => {
            const repWebsocket = JSON.parse(item);
            const nameArz = Object.keys(repWebsocket);     
            const newPrice = Object.values(repWebsocket); 
            const newData = [...data];
            newData.map((e) => {
              if(e.id === nameArz[0] && e.priceUsd !== newPrice[0]){
                e.priceUsd = newPrice[0] as string;
                e.background = 'active';
                setData(newData);
                setTimeout(() => {
                  e.background = '';
                }, 2000);
              }
            });    
          });
        }
      }
    }, [data]);
  
    useEffect(() => {
      const TakeAllData = async () => {
        try {
          const data = await getAllData();
          setData(data.data.data);
        } catch (err) {
          setError({
              message: "Fetch is failed !",
              bool: true,
          });
        }
      };
      TakeAllData();
    }, []);
  return (
    <div>
       <Table error={error} coins={data}/>
    </div>
  )
}

export default App
