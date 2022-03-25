import Head from 'next/head'

export default function AppLayout ({children}){
    return (
        <>  
            <main>
                <Head>
                    <title>Mawter</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {children}
            </main>
            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: monospace;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>
        </>
    )
}