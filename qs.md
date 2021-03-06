## Question 1:

<p><em>
Hello,
I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."
Cheers, George  
</em></p>


Hi George,

Records refer to objects in your index. They are the individual units of information you want to search for and they can have any number of attributes.

Here are two examples:

`{
“name”:  “George”,
“questions”: [“records”, “indexing”, “custom ranking”] 
}`

`{
  "name": "Iphone 6 64Gb",
  "brand": "Apple",
  "color": "Gold",
  "categories": ["smartphone", "phone", "electronics"],
  "price": 789
}`

https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/in-depth/what-is-in-a-record/

Indexing is the process of adding those records so they can be searched. The index is where all the searchable data is stored after it’s been indexed. 

https://www.algolia.com/doc/api-client/methods/indexing/

Custom Ranking works on any boolean or numeric attribute. Depending on what kind of data you’re using, you might have different priorities. Relevant metrics might include number of likes, popularity, ratings, page views, or number of comments. You might also custom rank based on a ‘promoted’ boolean or ‘sale’ boolean. 

https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/

Best, Erika

## Question 2: 

<p><em>
Hello,
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.
Regards, Matt  
</em></p>

Hi Matt, 

Thank you for writing in with your experience using the new dashboard. I can see how the safety measures preventing accidental deletion on the Indices page might take up time if you’re frequently performing these actions. 

Have you ever considered using the Algolia API to delete or clear your indexes? You’d be able to use a short command - as short as index.delete() - instead of the dashboard and you could save a lot of clicks. 
 
I’d be happy to help you get set up if this is new to you! I’ve included some documentation for reference. 

https://www.algolia.com/doc/api-reference/api-methods/delete-index/
https://www.algolia.com/doc/api-reference/api-methods/clear-objects/

Best, Erika

## Question 3: 

<p><em>
Hi,
I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?
Regards, Leo  
</em></p>

<p>
Hi Leo, 
 
On a very high level, you’ll need to send Algolia your data, choose how you want to sort and filter it, and build the search UI on your website. 
 
I’m going to go into a little more detail and share some links to documentation. 
 
Depending on a number of factors, you’ll have varying needs of development support. It’s hard to be specific because of the variety of search use cases, but let me know if you have specific questions. 
 
Sending Algolia Data involves uploading your data as JSON through a dashboard or via the API. Depending on your current data situation, this will involve some dev time. 
 
https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/
 
Sorting and filtering your data involves selecting important attributes you want to be searchable (like product name or brand) and ranking how the search results are shown to your users. There are a lot of ways you can customize your search experience. 
 
https://www.algolia.com/doc/guides/managing-results/must-do/searchable-attributes/
https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/
 
Building search UI will vary depending on your current stack. Algolia has libraries for a few different frameworks, including mobile, that can help. These can be as customized as you need. This will require varying development, depending on your needs. 
 
https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/
 
Finally, our documentation can be found at https://www.algolia.com/doc/. 

Best, Erika
</p>