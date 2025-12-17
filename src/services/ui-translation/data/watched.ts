import { merge } from '../helper';

merge(
    /^\/watched/,
    undefined,
    {
        'Watched Tag Galleries': '登録中タグの新着ギャラリー',
        'You do not have any watched tags. You can change your watched tags from ':
            '登録タグはありません。こちらで追加することができます：',
    },
    [[/^Showing results for ([\d,]+) watched tags?$/, '$1 個の登録タグの結果を表示しています']],
);
