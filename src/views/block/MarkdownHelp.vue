<template>
    <div class="markdown-guide" is-dialog>
      <div class="inner">
        <p>本站markdown语法说明</p>
        <ul>
          <li>
            <a href="https://guides.github.com/features/mastering-markdown/#syntax" target="_blank">
              markdown基础语法+GFM
            </a>
          </li>
          <li v-for="item in guide">
            <b>{{ item[0] }}:</b>
            <span v-html="item[1]"></span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "MarkdownHelp",
  data (){
    return {
      guide: [
        ['<<>>', '段落开头缩进'],
        ['![sticker](aru/12)', '阿鲁表情包的第12个表情'],
        ['#[google](https://google.com)', 'target=_blank的链接'],
        ['![描述[30% x ]](imgurl)', 'alt为描述文字，宽为30%未设高度的img'],
        ['-(red: 文字)-', '颜色为red的文字'],
        ['-(write-1.3: 文字)-', '字体为write-font，大小为1.3rem的文字'],
        ['[#锚点#]', '<b>仅博主可用</b>。自定义一个锚点'],
        ['[#文字#锚点#]', '一段文字，点击跳到锚点'],
        ['[html]文字[/html]', '<b>仅博主可用</b>。直接插入html'],
        ['#{self}(articleId)', '指向本站id是articleId的链接，#代表外链'],
        ['--标题--\n文字\n-- --', '一个field'],
        ['==标题==\n文字\n== ==', '可隐藏内容'],
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.markdown-guide {
  color: black;

  > .inner {
    max-height: 90%;
    padding: 1rem 3rem;

    > p {
      font-size: 1rem;
      font-weight: bold;
    }

    > ul {
      > li {
        margin: 1.5rem 0;

        > a, > b {
          font-size: 85rem;
          color: #0066d8;
          white-space: pre;
        }

        > b {
          margin-right: 1rem;
        }

        > span {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>