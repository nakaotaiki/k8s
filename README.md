# k8s
docker+k8sを用いた三層アーキテクチャ

【機能】
・ブログサイト
・各層を冗長化
・WEB層を負荷に応じてオートスケールリング

【MW】
・WEB層：Nginx
・AP層：node.js
・DB層：MongoDB

【kubernetesリソース（計11種類）】
・Pod
・Replicaset
・Deployment
・Statefulset
・Service
・Ingress
・PersistentVolume
・PersistentVolumeClaim
・Configmap
・Secret
・HorizontalPodAutoscaling
