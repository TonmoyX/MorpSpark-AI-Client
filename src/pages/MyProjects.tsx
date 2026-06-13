import React from 'react';
import { useState, useEffect } from 'react';
import type { Project } from '../types';
import { Loader2Icon } from 'lucide-react';
const MyProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<Project[]>([]);

    const fetchProjects = async () => {
    }

    useEffect(() => {
        fetchProjects();
    }, []);
    return (
        <div className = 'px-4 md:px-16 lg:px-24 xl:px-32'>
            {loading ? (
                <div className='flex items-center justify-center h-[80vh]'>
                    <Loader2Icon className='animate-spin size-7 text-indigo-200' />
                </div>
            ) : projects.length > 0 ? (
                <div className='py-10 min-h-0'>
                    <div className=''>

                    </div>
                </div>) : (<div></div>)}
        </div>
    );
};

export default MyProjects;

//24 min