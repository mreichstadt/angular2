export class PostService {
  posts = [
  	{
  		title: 'Mon premier post',
  		content: 'Le contenu de mon premier post',
  		loveIts: 10,
  		createdAt: new Date('2018','07','10','12','30')
  	},
  	{
  		title: 'Mon deuxième post',
  		content: 'Le contenu de mon deuxième post',
  		loveIts: -2,
  		createdAt: new Date('2018','07','10','12','30')
  	},
  	{
  		title: 'Encore un post',
  		content: 'Le contenu de mon dernier post',
  		loveIts: 0,
  		createdAt: new Date('2018','07','10','12','30')
  	}
  ];
}