import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Blues Nova</h1>

            <p>Você pode acessar o meu <a href="https://github.com/ssantosalan" target="_blank" rel="external">GitHub</a></p>
            <Link href="/sobre">
            
            <p>Você pode acessar o meu <a href="https://www.linkedin.com/in/alan-s-santos/" target="_blank" rel="external">LinkedIn</a></p>
            
            <a >Acessar página Sobre</a>
            </Link>
        </div>
    )
}


export default Home