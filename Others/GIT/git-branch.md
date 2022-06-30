## 分支结构

- ### 🐱‍🐉创建分支

    ```
    git branch <Name>
    ```

- ### 切换分支
    ```
    git checkout <Name>
    ```
- ### 合并分支

    ```
    # 把<Name>分支 向所在分支做合并
    git merge <Name>
    # 冲突可视化修改
    git mergetool 
    ```
- ### 查看分支

    ```
    git branch 
    ```
    | 参数     |  说明 |
    |  ----   |  --- |
    | null    |  查看分支 |
    | -v      |  查看最后一次提交|
    | --merge |  查看已合至当前分支 |
    | --no-merge| 查看未合并到当前分支|
    | -d      |删除分支|
    | -D      |强制删除|


## 远程分支