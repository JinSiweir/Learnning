## Git 基础

### 初始化git

```
git init  

git clone  'url'  localname
```

### 查看状态

```
git status

git status -s 
```
### 跟踪文件/文件夹

```
git add <files>
```

### 忽略文件
在.gitignore文件中配置git忽略模式

- 所有空行或者以 # 开头的行都会被 Git 忽略。
- 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。
- 匹配模式可以以（/）开头防止递归。
- 匹配模式可以以（/）结尾指定目录。
- 要忽略指定模式以外的文件或目录，可以在模式前加上叹号（!）取反。


```
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

### 查看已暂存和未暂存文件
查看未暂存和暂存区别
```
git diff
```
查看暂存和最后一次提交区别
```
git diff --staged
```
### 提交更新
```
git commit -m "message"
```
跳过暂存 提交所有更改的跟踪过的文件
```
git commit -a -m "message"
```

### 移除文件
```
# 移除文件
rm file

# 从git中移除文件
git rm file

# 强制删除文件 （不能恢复）
git rm -f file

# git取消跟踪
git rm --cached file

# glob模式
    #删除 log目录下所有的.log文件
    git rm log/\*.log
    # 删除所有以-结尾文件
    git rm \*-
```

### 移动文件 
```
git mv  fileform  fileto

git mv ===
    mv fileform  fileto
    git rm fileform
    git add fileto 
```