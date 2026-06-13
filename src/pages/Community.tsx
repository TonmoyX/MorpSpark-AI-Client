import { useState, useEffect } from 'react';
import type { Project } from '../types';
import { Loader2Icon, PlusIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { dummyProjects } from '../assets/assets';
const Community = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<Project[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            setProjects(dummyProjects);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        fetchProjects();
    }, []);

    return (
        <div className = 'px-4 md:px-16 lg:px-24 xl:px-32'>
            {loading ? (
                <div className='flex items-center justify-center h-[80vh]'>
                    <Loader2Icon className='animate-spin size-7 text-indigo-200' />
                </div>
            ) : projects.length > 0 ? (
                <div className='py-10 min-h-[80vh]'>
                    <div className='flex items-center justify-between mb-12'>
                            <h1 className="text-2xl font-medium text-white">Published Projects</h1>
                    </div>

                    <div className='flex flex-wrap gap-3.5'>
                        {projects.map((project) => (
                            <Link to={`/view/${project.id}`} target='_blank' key={project.id} className='w-72 max-sm:mx-auto cursor-pointer bg-gray-900/60 border border-gray-700 rounded-lg p-4 overflow-hidden shadow-md group  hover:border-indigo-600 transition-all duration-300'>
                                <div className='relative w-full h-40 bg-gray-900 overflow-hidden border-b border-gray-800'>
                                    {project.current_code ? (
                                        <iframe
                                        srcDoc={project.current_code}
                                        className='absolute top-0 left-0 w-[1200px] h-[800px]
                                        origin-top-left pointer-events-none'
                                        sandbox='allow-scripts allow-same-origin'
                                        style={{transform: 'scale(0.25)'}}
                                        />
                                    )
                                : (
                                    <div className='flex flex-col items-center justify-center h-full gap-2 text-gray-500'>
                                        <p className='text-gray-500 text-sm'>No preview available</p>
                                    </div>
                                )
                                }
                                    </div>
                                <div className='p-4 text-white bg-linear-180 from-transparent group-hover:from-indigo-950 to-transparent transition-colors'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-lg font-semibold'>{project.name}</h2>
                                        <button className='text-sm border-1 border-gray-500 text-white py-1 px-2 rounded-full transition-colors'>
                                            Website
                                        </button>
                                    </div>
                                    <p className='text-gray-400 text-sm'>{project.initial_prompt}</p>

                                    <div className='flex justify-between items-center mt-6'>
                                    <span className='text-gray-500 text-sm'>{new Date(project.createdAt).toLocaleDateString()}</span>
                                    <div className='flex items-center gap-2 group-hover:opacity-100 transition-opacity'>
                                            <button className='text-sm border-1 border-gray-500 hover:bg-indigo-700 text-white py-1 px-3 rounded-md transition-colors items-center flex gap-2'>
                                                <span className='bg-gray-200 size-4.5 rounded-full text-black  font-semibold flex items-center justify-center'>{project.user?.name?.slice(0,1)}</span>
                                                {project.user?.name}
                                            </button>
                                        
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>) : (<div className='flex flex-col items-center justify-center h-[80vh] gap-6'>
<h1 className="text-2xl font-medium text-white">You have no projects yet</h1>
<button onClick={() => navigate('/')} className="flex items-center gap-2 bg-linear-to-r from-[#CB52D4] to-indigo-600 rounded-md px-4 py-2">
                                Create New <PlusIcon size={20}/>
                            </button>
                </div>)}
        </div>
    );
};


//24 min
export default Community;