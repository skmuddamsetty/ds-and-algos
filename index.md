## Data Structures and Algorithms

You can use the [editor on GitHub](https://github.com/skmuddamsetty/ds-and-algos/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Linked List Problems

| Problem #  | Problem Title |
| ------------- | ------------- |
| 1  | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)  |
| Content Cell  | Content Cell  |

### Binary Tree Problems

| Problem #  | Problem Title |
| ------------- | ------------- |
| 1  | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)  |
| Content Cell  | Content Cell  |

### Binary Search Tree Problems

| Problem #  | Problem Title |
| ------------- | ------------- |
| 1  | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)  |
| Content Cell  | Content Cell  |

### Dynamic Programming Problems

| Problem #  | Problem Title |
| ------------- | ------------- |
| 1  | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)  |
| Content Cell  | Content Cell  |

### LeetCode Problems

| Problem #  | Problem Title |
| ------------- | ------------- |
| 1  | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)  |
| Content Cell  | Content Cell  |

### String Problems

| Problem #  | Problem Title |
| ------------- | ------------- |
| 1  | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)  |
| Content Cell  | Content Cell  |

### Array Problems

| Problem #  | Problem Title |
| ------------- | ------------- |
| 1  | [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)  |
| Content Cell  | Content Cell  |

### Array Problems

#### Find pair with given sum in the array

```
/**
 *
 *
 * @param {Number} a
 * @param {Number} b
 */
const findPairWithGivenSum = (A, sum) => {
  let map = {};
  let index = 0;
  let diff;
  for (let num of A) {
    diff = sum - num;
    if (map[diff] !== undefined) {
      console.log(`[${map[diff]}, ${index}]`);
      return;
    }
    map[num] = index;
    index++;
  }
};

```
### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/skmuddamsetty/ds-and-algos/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
