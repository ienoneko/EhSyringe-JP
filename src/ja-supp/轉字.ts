import dict from './轉字.yml';

const KanjiTable = Object.freeze(dict as Record<string, string>);

/** 将中文簡体字替換成日本戦後新字体 */
export function kanjiFixup(text: string): string {
    let ret = '';
    for (const ch of text) {
        ret += KanjiTable[ch] || ch;
    }
    return ret;
}
