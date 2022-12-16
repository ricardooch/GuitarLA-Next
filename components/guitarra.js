import Image from "next/image"

function Guitarra({guitarra}) {
    const { descripcion, imagen, nombre, precio, url } = guitarra
    return (
        <div>
            <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}` } />
        </div>
    )
}

export default Guitarra