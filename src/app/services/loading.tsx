const Loading = () => {

    const servicesSkeleton: any = [1, 2, 3, 4];
    return (
        <>
            <main>
                <div className="flex flex-wrap animate pulse">
                    {
                        servicesSkeleton.map((index:any) => {
                            return <div
                                key={index}
                                className="w-64 h-64 mx-2 bg-slate-300   relative overflow-hidden group">
                            </div>
                        })
                            }
                </div>
                
                </main>
        </>
    );
}

export default Loading;