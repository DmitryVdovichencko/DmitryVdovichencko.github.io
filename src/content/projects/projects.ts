import { ProjectListType } from '../../types/Projects';

export const projects:ProjectListType = [
	{
		title: 'Shift Type App',
		srcUrl: 'https://github.com/DmitryVdovichencko/shift-type',
		demoUrl: 'https://dmitryvdovichencko.github.io/shift-type/',
		cover: 'shift-type.jpeg',
		description: 'Web app to define working shift-type on selected date.',
		tags:['HTML', 'CSS', 'JS']
	},
	{
		title: 'HowHttpsWorks russian translation',
		srcUrl: 'https://github.com/DmitryVdovichencko/how-https-works-russian',
		demoUrl: 'https://howhttps.works/ru/',
		cover: 'hhttpsw.png',
		description: 'Russian translation project for howhttps.works comic. Simple parser with NodeJS to create .md files for translation',
		tags:['NodeJS', 'Markdown', 'Russian Translation']
	}
]