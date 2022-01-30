interface Project {
	title: string
	srcUrl:  string
	demoUrl?: string
	cover?: any
	tags?: Array<string>
	description: string
}

export type ProjectListType = Array<Project>
