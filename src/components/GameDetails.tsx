export interface IGameDetails { }

const GameDetails: React.FC <IGameDetails> = () => {

    return(
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-full lg:grid-flow-col-dense lg:grid-cols-3 h-screen">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2">
            {/* Description list*/}
            <section aria-labelledby="applicant-information-title">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
                    Game Details
                  </h2>
                </div>
                
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Name: </dt>
                      <dd className="mt-1 text-sm text-gray-900"> Counter Strike </dd>
                      
                      <dt className="text-sm font-medium text-gray-500"> Release date: </dt>
                      <dd className="mt-1 text-sm text-gray-900"> 21. Aug. 2012 </dd>

                      <dt className="text-sm font-medium text-gray-500">  Game Tags  </dt>
                      <dd className="mt-1 text-sm text-gray-900"> hier die brackets testen  </dd>

                      <dt className="text-sm font-medium text-gray-500">  Publisher  </dt>
                      <dd className="mt-1 text-sm text-gray-900"> Valve  </dd>

                      <dt className="text-sm font-medium text-gray-500">  Altersfreigabe  </dt>
                      <dd className="mt-1 text-sm text-gray-900"> FSK 16  </dd>

                      <dt className="text-sm font-medium text-gray-500">  Bewertung  </dt>
                      <dd className="mt-1 text-sm text-gray-900"> Schmutz  </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500"> Beschreibung </dt>
                      <dd className="mt-1 text-sm text-gray-900">Counter-Strike: Global Offensive (CS:GO) erweitert sein teambasiertes actionreiches Gameplay, mit dem es bei seiner Veröffentlichung vor 19 Jahren Spielgeschichte schrieb. CS:GO bietet neue Karten, Charaktere, Waffen, sowie Spielmodi und verbesserte Versionen des klassischen CS-Inhalts </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500"></dt> 
                      <dd className="mt-1 text-sm text-gray-900"></dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Anderen Sachen</dt>
                      <dd className="mt-1 text-sm text-gray-900">Bla blaaa BLA</dd>
                    </div>
                    <div className="sm:col-span-2">
                      
                    </div>
                    
                  </dl>
                </div>
              </div>
            </section>      
          </div>
        </div>

    )
}

export default GameDetails;