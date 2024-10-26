'use-client';
import Image from 'next/image';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
  techStacks?: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const {
    imageUrl,
    title,
    description,
    liveLink,
    codeLink,
    techStacks = [],
    className = '',
  } = props;

  return (
    <div
      className={`flex flex-col max-w-xl rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 
        hover:scale-105 transition-all duration-500 ${className}`}
    >
      <a
        href={liveLink}
        target='_blank'
        rel='noopener noreferrer'
        className='p-1'
      >
        <div className='h-[250px] relative hover:scale-105 transition-all duration-500'>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes='100vw'
            className='rounded-t-lg'
          />
        </div>
      </a>
      <div className='flex-1 flex flex-col justify-between px-5 py-3'>
        <h3 className='text-xl font-semibold mb-3 text-gray-800 dark:text-white'>
          {title}
        </h3>
        <p className='flex-1 text-sm text-gray-600 dark:text-gray-300 mb-3'>
          {description}
        </p>
        {/* Technologies used in the project */}
        {techStacks.length > 0 && (
          <div className='mb-2'>
            <ul className='flex flex-wrap gap-2 text-gray-600 dark:text-gray-300'>
              {techStacks.map((tech, techIndex) => (
                <li
                  key={techIndex}
                  className='text-xs font-semibold bg-gray-200 dark:text-black py-1 px-3 rounded-lg'
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className='flex gap-4 items-center mt-5'>
          <a
            href={liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition'
          >
            View Live
          </a>
          <a
            href={codeLink}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition'
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
