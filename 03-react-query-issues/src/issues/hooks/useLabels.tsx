import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";
import { sleep } from "../../helpers/sleep";

const getLabels = async () :Promise<Label[]> =>{
    await sleep(2)
    const {data} = await githubApi.get<Label[]>('/labels');
    return data;
  }

export const useLabels = () =>{
    const labelsQuery = useQuery({
        queryKey:['labels'],
        queryFn: getLabels,
        //staleTime:1000*60*60 //hace que la data no se refresque en una hora, lo lee de la cache
        // initialData:[ //Si se coloca esto, se muestra desde la cache, y no carga datos desde el api, esto porque indicamos que la info no cambia muy frecuentemente (staleTime)
        //   {"id":791921801,"node_id":"MDU6TGFiZWw3OTE5MjE4MDE=","url":"https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F","name":"❤️","color":"ffffff","default":false},
        //   {"id":760751171,"node_id":"MDU6TGFiZWw3NjA3NTExNzE=","url":"https://api.github.com/repos/facebook/react/labels/Difficulty:%20challenging","name":"Difficulty: challenging","color":"f2687c","default":false} 
        // ],
        placeholderData:[ //se muestra mientras consultamos data al api
          {"id":791921801,"node_id":"MDU6TGFiZWw3OTE5MjE4MDE=","url":"https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F","name":"❤️","color":"ffffff","default":false},
          {"id":760751171,"node_id":"MDU6TGFiZWw3NjA3NTExNzE=","url":"https://api.github.com/repos/facebook/react/labels/Difficulty:%20challenging","name":"Difficulty: challenging","color":"f2687c","default":false}
        ]
      })

      return labelsQuery;
}