
import { coordenadaDTO } from './coordenadas.model'
import Mapa from './Mapa';
import { useFormikContext } from 'formik';

const MapaFormulario = (props:mapaFormularioProps) => {

    const {values}= useFormikContext<any>();
    function actualizarCampos(coordenadas: coordenadaDTO){

        values[props.campoLat]= coordenadas.lat;
        values[props.campoLng]= coordenadas.lng;
    }
  return (
    <Mapa coordenadas={props.coordenadas}
    manejarClickMapa={actualizarCampos} />
  )
}
interface mapaFormularioProps{
    coordenadas: coordenadaDTO[];
    campoLat:string;
    campoLng: string;
}

MapaFormulario.defaultProps={
    coordenadas:[]
}
export default MapaFormulario