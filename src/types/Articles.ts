export type ArticleReview = {
	node:{
		id: string,
		frontmatter: {
			title: string,
			cover: any,
			dateRu: string,
			dateEn: string,
			tags:	string[]
		},
		fields:{
			slug:string
		},
		excerpt:string
	}
};

export type ArticleList = {
	allMdx:{
		totalCount:number,
		edges:ArticleReview[]
	}

};