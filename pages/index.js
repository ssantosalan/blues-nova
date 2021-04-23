import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Blues Nova</h1>
            <p>Você pode acessar o meu <a href="https://github.com/ssantosalan" target="_blank" rel="external">GitHub</a></p>
            <Link href="/sobre">
            <a >Acessar página Sobre</a>
            <p>Você pode acessar o meu <a href="https://www.linkedin.com/in/alan-s-santos/" target="_Blank" rel="external">LinkedIn</a></p>
            </Link>
        </div>
    )
}


export default Home