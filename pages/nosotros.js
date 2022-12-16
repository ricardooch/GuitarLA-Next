import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

function Nosotros() {
    return (
        <Layout
            title={'Nosotros'}
            description="Sobre nosotros, guitarLA, tienda música"
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
                    <div>
                        <p>
                            Ut congue, nisi eget sollicitudin aliquam, dui dolor pulvinar tellus, et pretium quam quam sit amet quam. Morbi varius, eros et volutpat gravida, lectus nisl euismod nisi, quis mattis dolor ex id ipsum. Nullam vulputate condimentum ex, vel tempor elit congue non. Praesent auctor tincidunt interdum. Vestibulum eget arcu dignissim, scelerisque lectus a, pretium mi. 
                        </p>
                        <p>
                            Aliquam eu placerat erat. Sed dictum turpis a ex sollicitudin, id rutrum nibh congue. Vivamus lacinia mattis nisi, quis facilisis tellus pellentesque et. Fusce tempus purus mauris. Curabitur ut auctor sapien. Vestibulum ut eleifend enim, nec dapibus dolor. In sed luctus ante.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros