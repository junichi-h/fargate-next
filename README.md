# fargate-next

## 全体像
---

### 目的
[fargate](https://aws.amazon.com/jp/fargate/) コンテナにデプロイする。

### 手順

1. Docker imageを作り `ECR` へpushする
2. fargateクラスタ作成する
3. ALBを設定する。


## demo
[demo](http://ec2co-ecsel-sw35thyp28ha-830073945.ap-northeast-1.elb.amazonaws.com:3000/)

※ DNS側とALBをつなげてないのでportは `3000` のままにしてある。


## special thanks

[参考1](https://qiita.com/geerpm/items/a97f0605177b3a18bb5b)
[参考2](https://qiita.com/NaokiIshimura/items/8e43135864f2518dcabc)

