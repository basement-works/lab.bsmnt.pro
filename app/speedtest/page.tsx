"use client";
import { GeistMono } from 'geist/font/mono';
import { useNetworkSpeedTest } from '@rtbjs/network-speed-test';
import { useEffect, useState } from 'react';
import { Wifi } from 'lucide-react';


type UseNetworkSpeedTest = {
  runTest: (options?: RunTestOptions) => void;
  download: {
    isRunning: boolean;
    isComplete: boolean;
    result: {
      error?: any;
      elapsedTime?: number;
      meanClientMbps?: number;
      numberOfBytes?: number;
    };
  };
  upload: {
    isRunning: boolean;
    isComplete: boolean;
    result: {
      error?: any;
      elapsedTime?: number;
      meanClientMbps?: number;
      numberOfBytes?: number;
    };
  };
  isRunning: boolean;
  isComplete: boolean;
};

type RunTestOptions = {
  download?: boolean;
  upload?: boolean;
  runUploadBeforeDownload?: boolean;
};

export default function Page() {
  const { runTest, download, upload } = useNetworkSpeedTest();
  const [isTesting, setIsTesting] = useState({ upload: false, download: false });
 const [results, setResults] = useState({ download: 0, upload: 0 });
 
  const handleRunDownloadTest = () => {
    setIsTesting(prevState => ({ ...prevState, download: true }));
    runTest({ download: true, upload: false });
  };

  const handleRunUploadTest = () => {
    setIsTesting(prevState => ({ ...prevState, upload: true }));
    runTest({ upload: true, download: false });
  };

   const handleReset = () => {
    setResults({ download: 0, upload: 0 });
  };

  useEffect(() => {
    if (upload.isComplete) {
      console.log("Upload test completed:", upload.result);
      setIsTesting(prevState => ({ ...prevState, upload: false }));
    }
  }, [upload.isComplete, upload.result]);

  useEffect(() => {
    if (download.isComplete) {
      console.log("Download test completed:", download.result);
      setIsTesting(prevState => ({ ...prevState, download: false }));
    }
  }, [download.isComplete, download.result]);

    const [ipAddress, setIpAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isp, setISP] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGeoData = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                setIpAddress(data.ip);
                setCity(data.city);
                setCountry(data.country_name);
                setISP(data.org);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching geo data:', error);
            }
        };

        fetchGeoData();
    }, []);

  return (
    <>
    
      <div className='mx-auto justify-center text-lg text-center my-48'>
      <h1 className='text-4xl flex items-center justify-center mb-3 font-extrabold'>
        Basement Network 
        <span className=' border-2 ml-2 border-dotted rounded-full'>
        <Wifi className='p-1 animate-pulse text-white' />
      </span>
      </h1>
      <section>
        <h1>Internet Provider: {isp}</h1>
         <div className=''>
           {isLoading ? (
                <p>Loading...</p>
            ) : (
                <p>
                   <div>
                       {ipAddress} — {city}, {country}
                   </div>
                </p>
            )}
        </div>
      </section>
      <section className={`${GeistMono.className} mt-4 mb-6`}>
        <div>
          Download Speed: <span className='text-sky-500'>{download.result.meanClientMbps !== undefined ? download.result.meanClientMbps.toFixed(2) : 0}</span>
           <span className='ml-3 border-2 border-zinc-500 py-0.5 text-sm bg-zinc-800 px-2 rounded-lg'>
            MB/s
          </span>
        </div>
        <div>
          Upload Speed: <span className='text-rose-500'>{upload.result.meanClientMbps !== undefined ? upload.result.meanClientMbps.toFixed(2) : 0} </span>
          <span className='ml-3 border-2 border-zinc-500 py-0.5 text-sm bg-zinc-800 px-2 rounded-lg'>
            MB/s
          </span>
        </div>
      </section>
       <section className='space-x-3 mt-3'>
        <button className='ml-3 py-2 text-sm bg-sky-500/30 text-sky-500 px-2 rounded-lg' onClick={handleRunDownloadTest} disabled={isTesting.download || isTesting.upload}>
          {isTesting.download ? 'Running Download Test...' : 'Run Download Test'}
        </button>
        <button className='ml-3 py-2 text-sm bg-rose-500/30 text-rose-500 px-2 rounded-lg' onClick={handleRunUploadTest} disabled={isTesting.download || isTesting.upload}>
          {isTesting.upload ? 'Running Upload Test...' : 'Run Upload Test'}
        </button>
        <button className='ml-3 py-2 text-sm bg-zinc-800 px-2 rounded-lg'>
          Reset
        </button>
      </section>
      </div>
    </>
  );
}
