import Swal from 'sweetalert2'


export  default function confirmar(onConfrim: any, 
    titulo: string = 'Desea Borrar el registro?',
    textoBoton:string = 'Borrar')
    {
    Swal.fire({
        title:titulo,
        confirmButtonText:textoBoton,
        icon:'warning',
        showCancelButton:true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
    }).then(result=>{
        if(result.isConfirmed){
            onConfrim()
        }
    })
    
}