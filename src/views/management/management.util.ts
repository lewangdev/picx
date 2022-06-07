import { Store } from 'vuex'
import { DirObject } from '@/store/modules/dir-image-list/types'

function getContent(targetContent: any, dirList: string[], n: number): any {
  if (targetContent) {
    if (dirList.length === n) {
      return targetContent
    }
    return getContent(
      targetContent.childrenDirs?.find((v: any) => v.dir === dirList[n]),
      dirList,
      // eslint-disable-next-line no-param-reassign,no-plusplus
      ++n
    )
  }
  return null
}

/**
 * 获取当前目录下所有内容（子目录和图片）
 * @param dirPath
 * @param dirObj
 */
export const getDirContent = (dirPath: string, dirObj: DirObject) => {
  if (dirPath === '/') {
    return dirObj
  }
  const dirList: string[] = dirPath.split('/')
  return getContent(dirObj, dirList, 0)
}

/**
 * 获取当前目录下所有内容（子目录和图片）
 * @param dirPath
 * @param content
 * @param type
 */
export const filterDirContent = (dirPath: string, content: any, type: string): any => {
  if (type === 'dir') {
    return content.childrenDirs?.filter((x: any) => x.type === 'dir')
  }

  if (type === 'image') {
    return content.imageList.filter((x: any) => x.type === 'image')
  }

  return []
}

export const dirModeHandle = (dir: string, store: Store<any>) => {
  if (dir === '/') {
    store.dispatch('SET_USER_CONFIG_INFO', {
      dirMode: 'rootDir',
      needPersist: false
    })
  }
}